import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

function Home({ setPoints }) {
    const [answer, setAnswer] = useState('');
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [shuffledWord, setShuffledWord] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/fetchingwords');
                setWords(response.data);
                if (response.data.length > 0) {
                    let randomIndex = Math.floor(Math.random() * response.data.length);
                    setCurrentWordIndex(randomIndex);
                    setShuffledWord(jumbleWord(response.data[randomIndex].word));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const jumbleWord = (word) => {
        if (word.length < 3) return word.split('').reverse().join('');
        let shuffled = word.split('');
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        if (shuffled.join('') === word) return jumbleWord(word);
        return shuffled.join('');
    };

    const loadNextWord = () => {
        if (words.length > 0) {
            let randomIndex = Math.floor(Math.random() * words.length);
            setCurrentWordIndex(randomIndex);
            setShuffledWord(jumbleWord(words[randomIndex].word));
            setAnswer('');
        }
    };

    const checkAnswer = (e) => {
        e.preventDefault();
        if (words.length > 0 && answer.toLowerCase() === words[currentWordIndex].word.toLowerCase()) {
            setPoints((prevPoints) => prevPoints + 1);
            alert("Correct Answer");
            loadNextWord();
        } else {
            alert("Incorrect Answer! Try Again");
        }
    };

    return (
        <div className="home">
            <div className="box">
                <div className="home-header">
                    <h2>Crack the Jumble, Find the Word!</h2>
                </div>
                <form onSubmit={checkAnswer}>
                    <span className="jumble-word">{shuffledWord}</span>
                    <input
                        type="text"
                        placeholder="Enter your answer"
                        name='text'
                        id='text'
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
