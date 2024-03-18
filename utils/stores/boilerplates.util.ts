import type { ISpringDependencyItem } from "~/types/model";

export const isDependencyExistInArray = (springDependenciesSelected : ISpringDependencyItem[] , value: string) => {
    return (
      springDependenciesSelected.findIndex(
        (item) => item.id === value
      ) !== -1
    );
  };


  export const saveBoilerplateFromBlob = (blob : Blob) =>{
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `test.zip`;
    a.setAttribute("download", "file.zip");
    a.style.display = "none";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }