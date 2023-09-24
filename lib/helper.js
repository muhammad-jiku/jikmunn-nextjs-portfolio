export const sendContactForm = async (formData) => {
  const Options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  };

  try {
    const res = await fetch(`api/contact`, Options);
    const responseData = await res.json();
    // console.log(res);
    // console.log(responseData);

    if (!res.ok) {
      throw new Error('Failed to send message');
    } else {
      return responseData;
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
