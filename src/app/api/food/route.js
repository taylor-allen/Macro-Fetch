export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get("region");
    const searchTerm = searchParams.get("searchTerm");
  
    const params = new URLSearchParams({
      method: "foods.search.v3",
      search_expression: searchTerm,
      region: region !== "choose" ? region : "",
      max_results: 5,
      format: "json",
    });
  
    const response = await fetch(`https://platform.fatsecret.com/rest/foods/search/v3?${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.FATSECRET_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
  
    const data = await response.json();
    return Response.json(data);
  }
  