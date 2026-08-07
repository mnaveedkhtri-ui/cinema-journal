export type RouteItem = {
  n: string;
  title: string;
  places: string;
  desc: string;
  days: string;
  films: string;
};

export const routes: RouteItem[] = [
  { n: '01', title: 'Iceland, in October', places: 'Reykjavík, Vík, Höfn, Seyðisfjörður', days: '11 days', films: '8 films referenced',
    desc: 'Following the long blue hour that arrives in the north Atlantic in early autumn, and the films that learned their light from it.' },
  { n: '02', title: 'Lisbon, alone', places: 'Alfama, Bairro Alto, Sintra', days: '6 days', films: '5 films referenced',
    desc: 'A solo route through the city of Wenders, Costa, and the slow tram. Built for one traveler, one camera, one notebook.' },
  { n: '03', title: 'The Yugoslav monuments', places: 'Belgrade, Tjentište, Kozara, Podgarić', days: '9 days', films: '4 films referenced',
    desc: 'A driving route to the spomeniks, the monumental sculptures of the former Yugoslavia, and the films they have haunted.' },
  { n: '04', title: 'Tokyo, at night', places: 'Shinjuku, Shibuya, Golden Gai, Shimokitazawa', days: '8 days', films: '7 films referenced',
    desc: "A nocturnal route through the Tokyo of Ozu, Kore-eda, and the long walks of Wenders' Tokyo-Ga." },
  { n: '05', title: 'The deserts of New Mexico', places: 'Albuquerque, White Sands, Marfa', days: '10 days', films: '6 films referenced',
    desc: 'Following the long horizontal light of the American southwest, and the films that learned their composition from it.' },
  { n: '06', title: 'The islands of the Inner Hebrides', places: 'Mull, Iona, Staffa, Skye', days: '7 days', films: '5 films referenced',
    desc: 'A ferry route through the islands of western Scotland, and the weather that cinema has been borrowing since Powell and Pressburger.' },
];
