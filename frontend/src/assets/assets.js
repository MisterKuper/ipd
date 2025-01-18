// pictures
import header_img from './images/fox_mascot.png'
import background1 from './images/background1.jpg'
import background2 from './images/background2.png'
import spiral from './images/spiral.png'
import spiral_mascot from './images/spiral_mascot.png'
import spiral_stuff from './images/spiral_stuff.png'
import reading_mascot from './images/reading_mascot.png'
import reading_thoghts from './images/reading_thoghts.png'
import reading_bubbles from './images/reading_bubbles.png'

// ui
import cross_icon from './ui/cross_icon.png'
import user_icon from './ui/user_icon.png'

// buttons
import test_btn_RED from './ui/test_btn_RED.png'
import test_btn_PRESSED_RED from './ui/test_btn_PRESSED_RED.png'
import test_btn_ORANGE from './ui/test_btn_ORANGE.png'
import test_btn_PRESSED_ORANGE from './ui/test_btn_PRESSED_ORANGE.png'
import test_btn_YELLOW from './ui/test_btn_YELLOW.png'
import test_btn_PRESSED_YELLOW from './ui/test_btn_PRESSED_YELLOW.png'
import test_btn_GREEN from './ui/test_btn_GREEN.png'
import test_btn_PRESSED_GREEN from './ui/test_btn_PRESSED_GREEN.png'
import test_btn_BLUE from './ui/test_btn_BLUE.png'
import test_btn_PRESSED_BLUE from './ui/test_btn_PRESSED_BLUE.png'
import test_btn_DARKBLUE from './ui/test_btn_DARKBLUE.png'
import test_btn_PRESSED_DARKBLUE from './ui/test_btn_PRESSED_DARKBLUE.png'
import test_btn_PURPLE from './ui/test_btn_PURPLE.png'
import test_btn_PRESSED_PURPLE from './ui/test_btn_PRESSED_PURPLE.png'
import test_btn_PINK from './ui/test_btn_PINK.png'
import test_btn_PRESSED_PINK from './ui/test_btn_PRESSED_PINK.png'

import final_test_btn_RED from './ui/final_test_btn_RED.png'
import final_test_btn_PRESSED_RED from './ui/final_test_btn_PRESSED_RED.png'
import final_test_btn_ORANGE from './ui/final_test_btn_ORANGE.png'
import final_test_btn_PRESSED_ORANGE from './ui/final_test_btn_PRESSED_ORANGE.png'
import final_test_btn_YELLOW from './ui/final_test_btn_YELLOW.png'
import final_test_btn_PRESSED_YELLOW from './ui/final_test_btn_PRESSED_YELLOW.png'
import final_test_btn_GREEN from './ui/final_test_btn_GREEN.png'
import final_test_btn_PRESSED_GREEN from './ui/final_test_btn_PRESSED_GREEN.png'
import final_test_btn_BLUE from './ui/final_test_btn_BLUE.png'
import final_test_btn_PRESSED_BLUE from './ui/final_test_btn_PRESSED_BLUE.png'
import final_test_btn_DARKBLUE from './ui/final_test_btn_DARKBLUE.png'
import final_test_btn_PRESSED_DARKBLUE from './ui/final_test_btn_PRESSED_DARKBLUE.png'
import final_test_btn_PURPLE from './ui/final_test_btn_PURPLE.png'
import final_test_btn_PRESSED_PURPLE from './ui/final_test_btn_PRESSED_PURPLE.png'
import final_test_btn_PINK from './ui/final_test_btn_PINK.png'
import final_test_btn_PRESSED_PINK from './ui/final_test_btn_PRESSED_PINK.png'

export const assets = {
    // pictures
    header_img,
    background1,
    background2,
    spiral,
    spiral_mascot,
    spiral_stuff,
    reading_mascot,
    reading_thoghts,
    reading_bubbles,

    //ui
    cross_icon,
    user_icon,

    //buttons
    test_btn_ORANGE,
    test_btn_PRESSED_ORANGE,
    test_btn_RED,
    test_btn_PRESSED_RED,
    test_btn_BLUE,
    test_btn_PRESSED_BLUE,
    test_btn_GREEN,
    test_btn_PRESSED_GREEN,
    test_btn_YELLOW,
    test_btn_PRESSED_YELLOW,
    test_btn_PINK,
    test_btn_PRESSED_PINK,
    test_btn_PURPLE,
    test_btn_PRESSED_PURPLE,
    test_btn_DARKBLUE,
    test_btn_PRESSED_DARKBLUE,

    final_test_btn_ORANGE,
    final_test_btn_PRESSED_ORANGE,
    final_test_btn_RED,
    final_test_btn_PRESSED_RED,
    final_test_btn_BLUE,
    final_test_btn_PRESSED_BLUE,
    final_test_btn_GREEN,
    final_test_btn_PRESSED_GREEN,
    final_test_btn_YELLOW,
    final_test_btn_PRESSED_YELLOW,
    final_test_btn_PINK,
    final_test_btn_PRESSED_PINK,
    final_test_btn_PURPLE,
    final_test_btn_PRESSED_PURPLE,
    final_test_btn_DARKBLUE,
    final_test_btn_PRESSED_DARKBLUE,
};


export const course_list = [
    {
        _id: '1',
        title: 'Jedzenie i napoje',
        image: [background1, background2],
        lessons: [
            {
                _id: "101",
                tasks: [
                    {
                        _id: "1001",
                        type: "one-choice",
                        text: "Which of the following is a fruit?",
                        audio: [background1, background2, background1, background1],
                        images: [background1, background2, background1, background2],
                        options: ["Apple", "Carrot", "Broccoli", "Potato"],
                        answer: "Apple"
                    },
                    {
                        _id: "1002",
                        type: "drag-and-drop",
                        text: "Match the fruit with its color.",
                        audio: [background1, background1],
                        images: [background1, background2, background1, background2],
                        options: ["Red", "Yellow", "Green", "Blue"],
                        answer: ["Red", "Yellow", "Green", "Blue"]
                    }
                ]
            }
        ],
    },
]