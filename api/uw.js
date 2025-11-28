// API route to proxy Unusual Whales requests and protect API key
// Endpoint: /api/uw?endpoint=...&params=...

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.UW_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'UW_API_KEY not configured' });
  }

  const { endpoint, ...params } = req.query;

  if (!endpoint) {
    return res.status(400).json({ error: 'Missing endpoint parameter' });
  }

  try {
    // Build the UW URL
    const queryParams = new URLSearchParams(params);
    
    const uwUrl = `https://api.unusualwhales.com${endpoint}?${queryParams.toString()}`;
    
    console.log('Fetching UW URL:', uwUrl);
    
    const response = await fetch(uwUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      }
    });
    
    const data = await response.json();

    if (!response.ok) {
      console.error('UW API error response:', response.status, data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('UW API error:', error);
    return res.status(500).json({ error: 'Failed to fetch from Unusual Whales API' });
  }
}
