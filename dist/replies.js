const prompts = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
        "your name please",
        "your name",
        "may i know your name",
        "what is your name",
        "what call yourself"
    ],
    ["hsc options in diploma"],
    ["ssc options in diploma"],
    ["i scored eighty plus percentage in ssc boards", "i scored seventy plus percentage in ssc boards", "i scored ninety plus percentage in ssc boards"],
    ["options in each stream"],
    ["i scored sixty plus percentage in ssc boards","i scored fifty plus percentage in ssc boards","i passed in ssc boards"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["i opt science and got ninety plus percentile", "i opt science and got eighty plus percentile", "i opt science and got seventy five plus percentile"],
    ["bro"],
    ["i opt commerce and got ninety plus percentile", "i opt commerce and got eighty plus percentile", "i opt commerce and got seventy five plus percentile"],
    ["i opt arts and got ninety plus percentile", "i opt arts and got eighty plus percentile", "i opt arts and got seventy five plus percentile"],
    [""],
    ["options in engineering"],
    ["options in bachelor of science"]
]

// Possible responses, in corresponding order

const replies = [
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
    ],
    [
        "Nothing much",
        "About to go to sleep",
        "Can you guess?",
        "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The fantastic four: Nishanth, Meghraj, Akshat, Adish "],
    ["Hi, I am AMAN. Your personal career Inspira!.\nType in your obtained mark range from SSC\n Or Enter the stream you are currently in with the percentile obtained"],
    ["Here are 3 options from many \n 1- Engineering Diploma \n 2- Diploma in Computer Application \n 3-Diploma in Industrial Safety"],
    ["There are 3 options and those are \n 1- Engineering Diploma \n 2- Art Teacher Diploma \n 3-Interior Design Diploma"],
    ["Then after 10th you have all options opened and those are:\n 1-Science Stream \n 2-Commerce Stream \n 3-Arts Stream"],
    [
        "Science Stream has the following options: \n 1-PCMB \n 2-PCM \n 3-PCB \nCommerce Stream has the following options:\n 1-Economics and Commercial Geography \n 2-Banking \n 3-Mathematics and Elementary Statistics \n etc...\nArts Stream has the following options:\n 1-Psychology \n 2-Sociology \n 3-Philosophy \n etc..."],
    ["Then after 10th you can not opt for science stream but can opt the other 2 and that is: \n 1-Commerce Stream \n 2-Arts Stream"],
    ["Bye", "Goodbye", "See you later"],
    ["Then you have a great chance to get the following courses in a good college:\n 1-Engineering \n2-Bachelors course in Science \n3-Diploma Courses in Science"],
    ["Bro!"],
    ["Then you have a great chance to get the following courses in a good college:\n 1-Bachelor of Commerce(BCom) \n2-Bachelor of Economics(BE) \n3-Bachelor of Business Administrations(BBA) \n4-Chartered Accountancy(CA)\n etc..."],
    ["Then you have a great chance to get the following courses in a good college:\n 1-Bachelor of Arts(BA) \n2-BA in Sociology \n3-Bachelor of Business Administrations(BBA) \n4-Bachelor of Hotel Management\n etc..."],
    ["Please say something :("],
    ["There are endless amount of options in Engineering \n Here are some of them: \n 1-BTech in CSE\n 2-BTech in ECE\n 3-BTech in EEE\n 4-BTech in ME\n etc..."],
    ["There are endless amount of options in BSc \n Here are some of them: \n 1-BSc in IT\n 2-BSc in Physics\n 3-BSc in Chemistry\n 4-BSc in Biotechnology\n etc..."]
]

// Random for any other user input

const alternative = [
    "Same",
    "Go on...",
    "Bro...",
    "Try again",
    "I'm listening...",
    "I don't understand :/"
]
