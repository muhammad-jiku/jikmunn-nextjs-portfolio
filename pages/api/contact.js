import { mailOptions, transporter } from '@/config/nodemailer';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = await req.body;
    // console.log(data);
    if (!data || !data.name || !data.email || !data.topic || !data.message) {
      return res.status(500).send({
        message: 'Something went wrong!',
      });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.topic,
        text: 'This is a test string!',
        html: '<h1>Test Title</h1><p>Somebody messages</p>',
      });
      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      // console.log(error);
      return res.status(500).json({
        message: 'Something Went Wrong',
      });
    }
  } else {
    return res.status(500).json({
      message: 'Something Went Wrong',
    });
  }
};

export default handler;
