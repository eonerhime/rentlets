import Listing from "@/lib/models/listing-model";
import { connect } from "@/lib/mongodb/mongoose";

export const POST = async (req) => {
  await connect();

  const data = await req.json();

  try {
    const startIndex = parseInt(data.startIndex) || 0;
    const limit = parseInt(data.limit) || 9;
    const sortDirection = data.order === "asc" ? 1 : -1;

    let offer = data.offer;
    if (offer === undefined || offer === "false") {
      offer = { $in: [false, true] };
    }

    let furnished = data.furnished;
    if (furnished === undefined || furnished === "false") {
      furnished = { $in: [false, true] };
    }

    let parking = data.parking;
    if (parking === undefined || parking === "false") {
      parking = { $in: [false, true] };
    }

    let type = data.type;
    if (type === undefined || type === "all") {
      type = { $in: ["sale", "rent"] };
    }

    const searchConditions = [];

    if (data.searchTerm) {
      const term = data.searchTerm;
      searchConditions.push(
        { name: { $regex: term, $options: "i" } },
        { description: { $regex: term, $options: "i" } },
        { address: { $regex: term, $options: "i" } },
        { type: { $regex: term, $options: "i" } }
      );
    }

    if (data.offer === "true") searchConditions.push({ offer: true });
    if (data.furnished === "true") searchConditions.push({ furnished: true });
    if (data.parking === "true") searchConditions.push({ parking: true });
    if (data.type && data.type !== "all")
      searchConditions.push({ type: data.type });
    if (data.userId) searchConditions.push({ userId: data.userId });

    const query = searchConditions.length > 0 ? { $or: searchConditions } : {}; // fallback to return all if nothing

    const listings = await Listing.find(query)
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    return new Response(JSON.stringify(listings), {
      status: 200,
    });
  } catch (error) {
    console.log("Error getting listings:", error);
    return new Response("Server Error", { status: 500 });
  }
};
