import { NextResponse } from "next/server";

async function getToken() {
    const res = await fetch("https://oauth.fatsecret.com/connect/token", {
      method:  "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type:    "client_credentials",
        scope:         "basic",
        client_id:     process.env.FATSECRET_CLIENT_ID,
        client_secret: process.env.FATSECRET_CLIENT_SECRET,
      }),
    });
    if (!res.ok) {
      console.log("Token fetch failed:", res.status);
      return null;
    }
    const data = await res.json();
    return data.access_token;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get("searchTerm") || "";

  if ( !searchTerm) {
    return NextResponse.json(
      { error: "Missing search term" },
      { status: 400 }
    );
  }

  const accessToken = await getToken();
  if (!accessToken) {
    return NextResponse.json(
      { error: "Failed to get access token" },
      { status: 500 }
    );
  }
  
  const searchResponse = await fetch('https://platform.fatsecret.com/rest/server.api', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      method: 'foods.search',
      search_expression: searchTerm,
      format: 'json',
      max_results: 3,
    })
  });

  const data = await searchResponse.json();

  return NextResponse.json(data);
}