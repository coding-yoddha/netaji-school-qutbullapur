const fetchAboutPageData = async () => {
  const res = await fetch(`/api/getAboutData`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

const fetchContactPageData = async () => {
  const res = await fetch(`/api/getContact`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

const fetchFacultyPageData = async () => {
  const res = await fetch(`/api/getFaculty`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

const fetchMainPageData = async () => {
  const res = await fetch(`/api/getMainPage`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;

  // Remove this
  // return mockMainResponse;
};

export {
  fetchAboutPageData,
  fetchContactPageData,
  fetchFacultyPageData,
  fetchMainPageData,
};
