import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import atomicHabit from '../Images/atomicHabit.jpg';
import styles from '../Styles/List.module.css';

export const BooksList = () => {
    const [posts, setPost] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.body.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <div style={{ height: '100vh', backgroundColor: '#e8f9f7' }}>
                <label className={styles.label}>Search -
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </label>
                <div className={styles.bookList}>
                    {
                        filteredPosts.map(post => (
                            <div className={styles.bookCard} key={post.id}>
                                <img src={atomicHabit} width="100" height="100" alt="novel"></img>
                                <div><b>Title - </b>{post.title}</div>
                                <div><b>Description - </b>{post.body}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};
