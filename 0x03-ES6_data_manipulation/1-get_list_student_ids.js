import getListStudents from "./0-get_list_students";

export default function getListStudentIds() {
    const Ids = getListStudents.map(function(studList) {
        return studList.id;
    });

    return Ids;
}