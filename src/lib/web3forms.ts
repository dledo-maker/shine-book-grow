// Web3Forms configuration
// Get your free access key at https://web3forms.com/
export const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export interface Web3FormsData {
  access_key: string;
  subject: string;
  from_name: string;
  [key: string]: string;
}

export async function submitToWeb3Forms(data: Web3FormsData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: result.message || "Form submitted successfully!" };
    } else {
      return { success: false, message: result.message || "Something went wrong. Please try again." };
    }
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return { success: false, message: "Network error. Please try again." };
  }
}
