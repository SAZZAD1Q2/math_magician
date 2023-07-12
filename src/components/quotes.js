import React, { useState, useEffect } from 'react';
import '../style/Quotes.module.css';

function Quote() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          headers: {
            'X-Api-Key': '70XFtQT36ytk4ahyn5jBCA==SqTetTYJ7YI236dW',
          },
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        const data = await response.json();
        setQuote(data[0].quote);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchQuotes();
  }, []);

  if (isLoading) {
    return <p className="loader">Loading wait Please...</p>;
  }

  if (isError) {
    return <p className="errorLoading">Error. An error occurred.</p>;
  }

  return <p className="quoteText">{quote}</p>;
}

export default Quote;
