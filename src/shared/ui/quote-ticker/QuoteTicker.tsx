import classes from './quoteTicker.module.css';

const quotes = [
    "Познание себя - начало всякой мудрости.",
    "Свобода - это возможность выбора.",
    "Мыслить критически - значит быть свободным.",
    "Истина рождается в диалоге.",
    "Знание - сила, но мудрость - в его применении."
]

export function QuoteTicker() {
    return (
        <div className={classes.tickerContainer}>
            <div className={classes.tickerTrack}>
                {quotes.map((quote, index) => (
                    <span key={index} className={classes.quote}>
                        {quote}
                    </span>
                ))}
            </div>
        </div>
    )
}