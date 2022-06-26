const movies = [
    {
        id: 1,
        title: "Spider-Man (2002)",
        img: "https://m.media-amazon.com/images/I/91GUGtFJt5L._AC_UY436_FMwebp_QL65_.jpg",
        director: "Sam Raimi",
        time: "121 Minutes",
        budget: "$139 Million",
        gross: "$825 Million",
        desc: "Spider-Man follows Peter Parker (Tobey Maguire), an orphaned high schooler who pines after popular girl-next-door Mary Jane Watson (Kirsten Dunst). While on a science class field trip at Columbia University, a genetically-engineered 'super spider' bites Peter. As a result, Peter gains superhuman abilities, including increased strength, speed, and the abilities to scale walls and generate organic webbing. After his beloved Uncle Ben (Cliff Robertson) is murdered, the teenager realizes that he must use his newfound abilities to protect New York City. Meanwhile, wealthy industrialist Norman Osborn (Willem Dafoe), the father of Peter's best friend Harry Osborn (James Franco), subjects himself to an experimental performance-enhancing serum, which creates a psychotic and murderous split personality. Donning a military battle suit, Norman becomes a freakish 'Green Goblin', who begins to terrorize the city. Peter, as Spider-Man, now must battle with the Goblin, all while dealing with personal situations involving his domestic and his love life."
    },
    {
        id: 2,
        title: "Spider-Man 2 (2004)",
        img: "https://m.media-amazon.com/images/I/91LtVRmUT-L._AC_UY436_FMwebp_QL65_.jpg",
        director: "Sam Raimi",
        time: "127 Minutes",
        budget: "$200 Million",
        gross: "$789 Million",
        desc: "Two years after the events of the first film, Peter struggles to balance his superhero and private lives and still pines after Mary Jane Watson, who is now engaged. Harry Osborn continues to believe Spider-Man is responsible for his father Norman Osborn's death. Spider-Man contends with scientist Otto Octavius (Alfred Molina), also known as Doctor Octopus, who initially mentors his alter-ego and has four mechanical tentacles fused to his spine following a failed fusion-based experiment and sets out to recreate the same that could destroy much of New York City." 
    },
    {
        id: 3,
        title: "Spider-Man 3 (2007)",
        img: "https://m.media-amazon.com/images/I/A1s01wxTKCL._AC_UY436_FMwebp_QL65_.jpg",
        director: "Sam Raimi",
        time: "139 Minutes",
        budget: "$258–350 Million",
        gross: "$894.9 Million",
        desc: "Spider-Man 3 picks up a year after the events of the second film. Peter is still with Mary Jane Watson, while Harry Osborn succeeds his father as the new Green Goblin (credited as New Goblin). Eddie Brock (Topher Grace), who, like Peter, is a photographer for the Daily Bugle, sets out to defame Spider-Man and incriminate him. Meanwhile, Flint Marko (Thomas Haden Church), an escaped convict, falls into a particle accelerator and becomes a shape-shifting sand monster known as Sandman. Peter later learns that Marko killed Uncle Ben, causing Peter's own dark intentions to grow. This vendetta is enhanced by the appearance of the mysterious black alien symbiotic substance that bonds to Peter, resulting in the formation of a new black costume. Once Peter separates himself from the alien, it finds a new host in the form of Brock, resulting in the creation of Venom and Peter Parker having to battle the villains in the end." 
    },
    {
        id: 4,
        title: "The Amazing Spider-Man (2012)",
        img: "https://m.media-amazon.com/images/I/A1n9jEk+xsL._AC_UY436_FMwebp_QL65_.jpg",
        director: "Marc Webb",
        time: "136 Minutes",
        budget: "$200–230 Million",
        gross: "758 Million",
        desc: "The film focuses on Peter Parker (Andrew Garfield) developing his abilities in high school and his relationship with Gwen Stacy (Emma Stone). He fights the Lizard, the monstrous form of Dr. Curt Connors (Rhys Ifans), his father's former partner and a scientist at Oscorp." 
    },
    {
        id: 5,
        title: "The Amazing Spider-Man 2 (2014)",
        img: "https://m.media-amazon.com/images/I/91ZGZMbRIIL._AC_UY436_FMwebp_QL65_.jpg",
        director: "Marc Webb",
        time: "142 Minutes",
        budget: "$200–293 Million",
        gross: "709 Million",
        desc: "The film takes place two years after the first film's events. Peter Parker graduates from high school, continues his crime-fighting duties as Spider-Man, while combating the electricity-manipulating Electro (Jamie Foxx), rekindling his relationship with Gwen Stacy, and encountering his old friend Harry Osborn (Dane DeHaan), who is slowly dying from a genetic disease." 
    },
    {
        id: 6,
        title: "Captain America: Civil War (2016)",
        img: "https://m.media-amazon.com/images/I/91ES+0FSEPL._AC_UY436_FMwebp_QL65_.jpg",
        director: "The Russo Brothers",
        time: "147 Minutes",
        budget: "$250 Million",
        gross: "$1.153 Billion",
        desc: "Peter Parker, who has spent the last six months as a local costumed crimefighter named Spider-Man, is recruited by Stark to join his team of Avengers to stop Rogers and his rogue faction of Avengers, who oppose the Sokovia Accords, from fleeing with fugitive Bucky Barnes. During the fight with Rogers and his team, Parker, utilizing a Stark-upgraded version of his initial makeshift suit, proves to be a formidable opponent, and implements a tactic with which he, Stark, James Rhodes / War Machine and Vision disable Scott Lang / Ant-Man in his giant-sized form. Upon returning home, Parker discovers some of the Stark tech features of the suit he was given by Stark." 
    },
    {
        id: 7,
        title: "Spider-Man: Homecoming (2017)",
        img: "https://m.media-amazon.com/images/I/91mhJDbpH3L._AC_UY436_FMwebp_QL65_.jpg",
        director: "Jon Watts",
        time: "133 Minutes",
        budget: "$175 Million",
        gross: "$880.2 Million",
        desc: "Set two months after the events of Civil War, Parker anxiously awaits his next assignment from Stark while simultaneously balancing his life at Midtown High with his vigilante life as Spider-Man. His investigation of a series of highly weaponized robberies leads him to mysterious weapons trafficker Adrian Toomes, who turns out to be the father of his high school crush Liz." 
    },
    {
        id: 8,
        title: "Avengers: Infinity War (2018)",
        img: "https://m.media-amazon.com/images/I/A1aHRPvn5JL._AC_UY436_FMwebp_QL65_.jpg",
        director: "The Russo Brothers",
        time: "149 Minutes",
        budget: "$325–400 Million",
        gross: "$2.048 Billion",
        desc: "Parker joins Iron Man, Doctor Strange, and the Guardians of the Galaxy in battling Thanos in the ruins of his home planet, Titan. However, Parker is among the many heroes who perish after Thanos snaps his fingers with a completed Infinity Gauntlet, which wipes out half of all life in the universe." 
    },
    {
        id: 9,
        title: "Avengers: Endgame (2019)",
        img: "https://m.media-amazon.com/images/I/91e9898R7QL._AC_UY436_FMwebp_QL65_.jpg",
        director: "The Russo Brothers",
        time: "181 Minutes",
        budget: "$356–400 Million",
        gross: "$2.798 Billion",
        desc: "After dying at the end of Infinity War, Parker is resurrected by Bruce Banner and joins the Avengers and their allies in a clash against Thanos and his army in upstate New York. At the battle's conclusion, Parker mourns Stark's death before returning to high school to reunite with his best friend Ned, and attends Stark's funeral with May." 
    },
    {
        id: 10,
        title: "Spider-Man: Far From Home (2019)",
        img: "https://m.media-amazon.com/images/I/91A+eXyGmvL._AC_UY436_FMwebp_QL65_.jpg",
        director: "Jon Watts",
        time: "129 Minutes",
        budget: "$160 Million",
        gross: "$1.132 Billion",
        desc: "Set after the events of Endgame, the film features Parker and his friends going to Europe on summer vacation, where Parker is drawn back to superheroics when he is forced to team up with Fury and Mysterio in battling the Elementals." 
    },
    {
        id: 11,
        title: "Spider-Man: No Way Home (2021)",
        img: "https://m.media-amazon.com/images/I/91PKNbBAufL._AC_UY436_FMwebp_QL65_.jpg",
        director: "Jon Watts",
        time: "148 Minutes",
        budget: "$200 Million",
        gross: "$1.901 Billion",
        desc: "After Mysterio exposes Parker's identity as Spider-Man to the world in Far From Home in addition to incriminating him for his demise, ruining Parker's and his close ones' life in the process, Parker asks Strange to make it a secret again with magic, but this inadvertently breaks open the multiverse and allows visitors from alternate realities to enter Parker's universe." 
    },
    {
        id: 12,
        title: "Into the Spider-Verse (2018)",
        img: "https://m.media-amazon.com/images/I/91RkAIJtmDS._AC_UY436_FMwebp_QL65_.jpg",
        director: "Bob Persichetti, Peter Ramsey, Rodney Rothman", 	
        time: "117 Minutes",
        budget: "$90 Million",
        gross: "$375.5 Million",
        desc: "Miles Morales as he becomes the new Spider-Man and joins other Spider-People from various parallel universes to save his universe from Kingpin." 
    },
];

export default movies;