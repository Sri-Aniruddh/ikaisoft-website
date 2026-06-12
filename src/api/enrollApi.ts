type EnrollForm = {
  name: string;
  email: string;
  phone: string;
  course?: string;
  message?: string;
};

type ApiResponse = {
  success: boolean;
  message?: string;
};

const BASE_URL = import.meta.env.VITE_API_URL;

export const sendEnrollForm = async (
  formData: EnrollForm
): Promise<ApiResponse> => {
  const res = await fetch(`${BASE_URL}/enroll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return res.json();
};