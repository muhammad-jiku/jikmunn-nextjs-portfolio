const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = await req.body;
    console.log(data);
  }
  return res.status(400).json({ message: 'Something Went Wrong' });
};

export default handler;
