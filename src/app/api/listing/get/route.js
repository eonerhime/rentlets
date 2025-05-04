import Listing from "@/lib/models/listing.model.js";
import { connect } from "@/lib/mongodb/mongoose.js";

export const POST = async (req) => {
  await connect();
  const data = await req.json();

  try {
    const {
      userId,
      listingId,
      searchTerm,
      type,
      parking,
      furnished,
      offer,
      sort = "createdAt",
      order = "desc",
      startIndex = 0,
      limit = 9,
    } = data;

    // Construct query filters dynamically
    const filters = {};

    if (userId) filters.userId = userId;
    if (listingId) filters._id = listingId;

    if (searchTerm) {
      filters.$or = [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
        { location: { $regex: searchTerm, $options: "i" } },
      ];
    }

    // Handle booleans and default cases
    if (type && type !== "all") {
      filters.type = type;
    } else {
      filters.type = { $in: ["sale", "rent"] };
    }

    if (parking === true) {
      filters.parking = true;
    }

    if (furnished === true) {
      filters.furnished = true;
    }

    if (offer === true) {
      filters.offer = true;
    }

    const sortDirection = order === "asc" ? 1 : -1;

    const listings = await Listing.find(filters)
      .sort({ [sort]: sortDirection })
      .skip(parseInt(startIndex))
      .limit(parseInt(limit));

    return new Response(JSON.stringify(listings), {
      status: 200,
    });
  } catch (error) {
    console.error("Error getting listings:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch listings.",
        details: error.message,
      }),
      {
        status: 500,
      }
    );
  }
};
