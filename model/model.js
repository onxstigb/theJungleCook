export function changePage(pageName) {
  console.log("pageName: ", pageName);
  if (pageName == "") {
    $.get("pages/home.html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.log("error", error);
      Swal.fire({
        title: "Error. Choose a different page.",
        text: `${error.statusText}`,
        icon: "error",
        confirmButtonText: "Yes",
        showCancelButton: true,
      });
    });
  } else {
    $.get(`pages/${pageName}.html`, (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.log("error", error);
    });
  }
}
