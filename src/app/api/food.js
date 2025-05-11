export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { region, searchTerm } = req.query;

  const params = new URLSearchParams({
    method: "foods.search.v3",
    search_expression: searchTerm,
    region: region !== "choose" ? region : "",
    max_results: 5,
    format: "json",
  });

  const response = await fetch(
    `https://platform.fatsecret.com/rest/foods/search/v1?${params}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.FATSECRET_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
