export default {
  genders: [
    {
      id: 'fd17a2e0-8eed-4dbe-8023-8c4388f1269e',
      name: 'Female',
    },
    {
      id: '08dcd9f5-a3a2-4d9b-ae96-fec7a49a277f',
      name: 'Male',
    },
    {
      id: '93127a1b-e70a-4a81-8388-23f5ef897335',
      name: 'Non-Binary',
    },
  ],
  jobTitles: [
    {
      id: '9e31637d-677a-4e9f-bd32-c3328fbd8f164',
      name: 'Junior developer',
    },
    {
      id: 'a962910a-59c4-4aee-b22e-4d000ddc6efd',
      name: 'Senior developer',
    },
    {
      id: '7a09c40d-9673-4ab7-8781-21693bdca0c3',
      name: 'Visual designer',
    },
    {
      id: '9773d7d0-0492-4251-95c1-1ded9050517f',
      name: 'UX expert',
    },
  ],
  offices: [
    {
      id: '0cc61c93-3b72-438e-8d39-0121df221054',
      name: 'Málaga',
    },
  ],
  users: [
    {
      id: '8861fe6f-f18f-4a8d-b895-fedd95fd3551',
      name: 'Antonio',
      surname: 'Benítez Fernández',
      date_of_birth: '1977-07-09T00:00:00',
      start_date: '2015-09-01T00:00:00',
      jobTitle: {
        id: '9773d7d0-0492-4251-95c1-1ded9050517f',
        name: 'UX expert',
      },
      avatarUrl: 'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
      gender: {
        id: '14915a46-52de-4b34-b31d-81d65865578e',
        name: 'Male', // where is it translated? (Male, Female, Non-Binary)
      },
      office: {
        id: '0cc61c93-3b72-438e-8d39-0121df221054',
        name: 'Málaga',
      },
      manager: {
        id: 1,
        name: 'Rodolfo Lagostino',
      },
    },
  ],
};
