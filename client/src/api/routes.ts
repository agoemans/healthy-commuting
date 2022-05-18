const url = "http://localhost:3000";

let requestOptions: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '',
    mode: 'cors'
};

export const getCurrentMonth = async () => {
    const currentMonth = await fetch(`${url}/api/currentMonth`);

    return currentMonth.json();
};