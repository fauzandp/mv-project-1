interface IHeaders {
  headers?: object;
  body?: string;
}

export async function fecthFromApi(
  url: string,
  method: string,
  requestHeaders?: IHeaders,
  params?: any
) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}` + url, {
    method: method,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_AUTHORIZATION_TOKEN}`,
    },
  });

  return response.json();
}
