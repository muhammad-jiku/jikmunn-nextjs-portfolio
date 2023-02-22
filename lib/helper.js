const BASE_URL = `http://localhost:3000/`;

export const sendContactForm = async (data) => {
  const Options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  };

  //    const res = await fetch(`${BASE_URL}api/users`, Options);
  //    const responseData = await res.json();
  //    // console.log(responseData);
  //    const data = await responseData?.data;
  //    // console.log(data);
  //    return data;

  try {
    await fetch(`${BASE_URL}api/contact`, Options).then((res) => {
      if (!res.ok) throw new Error('Failed to send message');
      return res.json();
    });
  } catch (error) {
    //   console.log(error);
    return error.message;
  }
};
