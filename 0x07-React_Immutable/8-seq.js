import { Seq } from "immutable";

export default function printBestStudents(object) {
  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const seq = Seq(object)
    .filter((stud) => stud.score > 70)
    .map((stud) => {
      return {
        ...stud,
        firstName: capFirstLetter(stud.firstName),
        lastName: capFirstLetter(stud.lastName),
      };
    });

  console.log(seq.toJS());
}
