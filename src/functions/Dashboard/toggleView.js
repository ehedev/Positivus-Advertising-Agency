export const getInitialView = () => {
    return localStorage.getItem("viewType") || "grid";
};
  
export const toggleView = (currentView, setViewType) => {
    const newView = currentView === "grid" ? "table" : "grid";
    setViewType(newView);
    localStorage.setItem("viewType", newView);
};