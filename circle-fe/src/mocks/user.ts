import UserListAPI from "@/types/UserListAPI";

const userDummy: UserListAPI[] = [
  {
    id: 1,
    username: "spongebob123",
    full_name: "Spongebob Squarepants",
    email: "spongebob@gmail.com",
    password: "sponge123",
    profile_picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png",
    profile_description: "The main character of the show",
    created_at: "2023-10-25T07:19:11.325Z",
    updated_at: "2023-10-25T07:19:11.325Z",
    threads: [
      {
        id: 14,
        content: "Pada mulanya adalah firman!",
        image:
          "https://e1.pxfuel.com/desktop-wallpaper/906/8/desktop-wallpaper-jellyfish-fields.jpg",
        created_at: "2023-10-26T04:03:26.376Z",
        updated_at: "2023-10-26T04:03:26.376Z",
      },
      {
        id: 9,
        content:
          "Screen Novelties created character models based on the works of Rankin/Bass for the show's stop-motion episodes.",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/SpongeBob_SquarePants_characters_by_Screen_Novelties.jpg/220px-SpongeBob_SquarePants_characters_by_Screen_Novelties.jpg",
        created_at: "2023-10-25T07:48:10.430Z",
        updated_at: "2023-10-25T07:48:10.430Z",
      },
      {
        id: 3,
        content:
          "The series has run for a total of twelve seasons, and has inspired three feature films",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bikini_Atoll.png/220px-Bikini_Atoll.png",
        created_at: "2023-10-25T07:26:30.767Z",
        updated_at: "2023-10-25T07:26:30.767Z",
      },
      {
        id: 1,
        content: "Mari kita ke konser musik kolosal di taman Bikini Bottom!",
        image: null,
        created_at: "2023-10-25T07:22:16.631Z",
        updated_at: "2023-10-25T07:22:16.631Z",
      },
    ],
    likes: [
      {
        id: 1,
        created_at: "2023-10-25T10:45:07.296Z",
        updated_at: "2023-10-25T10:45:07.296Z",
      },
    ],
  },
  {
    id: 2,
    username: "patrickstar123",
    full_name: "Patrick Star",
    email: "patrick@gmail.com",
    password: "patrick123",
    profile_picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png",
    profile_description: "Spongebob's best friend and neighbor",
    created_at: "2023-10-25T07:19:53.839Z",
    updated_at: "2023-10-25T07:19:53.839Z",
    threads: [
      {
        id: 8,
        content: "Lorem ipsum",
        image: "null",
        created_at: "2023-10-25T07:42:16.376Z",
        updated_at: "2023-10-25T07:42:16.376Z",
      },
      {
        id: 7,
        content: "Laksmana raja di laut, bersemayam di bukit batu",
        image: "null",
        created_at: "2023-10-25T07:41:10.613Z",
        updated_at: "2023-10-25T07:41:10.613Z",
      },
      {
        id: 5,
        content: "Lorem ipsum dolor sit amet",
        image: "null",
        created_at: "2023-10-25T07:35:16.614Z",
        updated_at: "2023-10-25T07:35:16.614Z",
      },
      {
        id: 2,
        content: "Halo dunia!",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_main_characters.png/220px-SpongeBob_SquarePants_main_characters.png",
        created_at: "2023-10-25T07:23:22.972Z",
        updated_at: "2023-10-25T07:23:22.972Z",
      },
    ],
    likes: [
      {
        id: 2,
        created_at: "2023-10-26T01:29:47.646Z",
        updated_at: "2023-10-26T01:29:47.646Z",
      },
    ],
  },
  {
    id: 3,
    username: "squidward_tentacles",
    full_name: "Squidward Tentacles",
    email: "squidward@gmail.com",
    password: "squidward123",
    profile_picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Squidward_Tentacles.svg/150px-Squidward_Tentacles.svg.png",
    profile_description: "Spongebob's grumpy neighbor and coworker",
    created_at: "2023-10-25T07:27:38.650Z",
    updated_at: "2023-10-25T07:27:38.650Z",
    threads: [
      {
        id: 10,
        content: "Hanya test saja",
        image: "null",
        created_at: "2023-10-25T08:22:07.988Z",
        updated_at: "2023-10-25T08:22:07.988Z",
      },
      {
        id: 6,
        content: "Apa lo tega",
        image: "null",
        created_at: "2023-10-25T07:38:24.819Z",
        updated_at: "2023-10-25T07:38:24.819Z",
      },
      {
        id: 4,
        content:
          "While Hillenburg was there, his love of the ocean began to influence his artistry. He created a precursor to SpongeBob SquarePants: a comic book titled The Intertidal Zone used by the institute to teach visiting students",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ocean_Institute%2C_aerial_shot%2C_cropped.png/220px-Ocean_Institute%2C_aerial_shot%2C_cropped.png",
        created_at: "2023-10-25T07:28:28.512Z",
        updated_at: "2023-10-25T07:28:28.512Z",
      },
    ],
    likes: [
      {
        id: 3,
        created_at: "2023-10-26T01:31:12.424Z",
        updated_at: "2023-10-26T01:31:12.424Z",
      },
    ],
  },
  {
    id: 5,
    username: "gary_snail",
    full_name: "Gary the Snail",
    email: "gary@gmail.com",
    password: "$2b$10$HJY2orMY0LDh3QUTIOVgL.wAVGGYCIWaJ7J9hZyJkIjXejVk8LTMC",
    profile_picture: "gary.jpg",
    profile_description: "Spongebob's pet snail",
    created_at: "2023-10-26T03:08:34.279Z",
    updated_at: "2023-10-26T03:08:34.279Z",
    threads: [
      {
        id: 13,
        content: "Meong meong meong",
        image: "null",
        created_at: "2023-10-26T03:12:54.915Z",
        updated_at: "2023-10-26T03:12:54.915Z",
      },
    ],
    likes: [],
  },
  {
    id: 4,
    username: "mrkrabs123",
    full_name: "Eugene H. Krabs",
    email: "krabs@gmail.com",
    password: "krabs123",
    profile_picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/220px-Mr._Krabs.svg.png",
    profile_description: "Spongebob's boss and owner of the Krusty Krab",
    created_at: "2023-10-26T03:06:48.612Z",
    updated_at: "2023-10-26T03:06:48.612Z",
    threads: [
      {
        id: 15,
        content: "Keren gan! #Keren",
        image: null,
        created_at: "2023-10-26T04:04:31.903Z",
        updated_at: "2023-10-26T04:04:31.903Z",
      },
      {
        id: 12,
        content: "Halo gayz",
        image: "null",
        created_at: "2023-10-26T03:12:00.489Z",
        updated_at: "2023-10-26T03:12:00.489Z",
      },
      {
        id: 11,
        content: "Halo gayz",
        image: "null",
        created_at: "2023-10-26T03:11:23.307Z",
        updated_at: "2023-10-26T03:11:23.307Z",
      },
    ],
    likes: [],
  },
];

export default userDummy;
