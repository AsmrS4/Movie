import React from 'react';
import Rating from '../Span/Rating';
import avatar from '../../assets/userAvatar.jpg';
import { transformDate } from '../../utils/converter/converter';

const ReviewCard = ({
    id = '',
    author = {},
    reviewText = '',
    createDateTime = '',
    isAnonymous = false,
    rating = 0,
}) => {
    return (
        <>
            <div className='review-card'>
                <div className='review-card__header'>
                    <div className='header-avatar'>
                        <img src={isAnonymous ? avatar : author.avatar} alt='Аватар' />
                        <span>{isAnonymous ? 'Аноним' : author.nickName}</span>
                    </div>
                    <div className='header-mark'>
                        <span>{transformDate(createDateTime)}</span>
                        <span>
                            Оценка: <Rating value={rating} />
                        </span>
                    </div>
                </div>
                <div className='review-card__body'>
                    <textarea spellCheck={true} readOnly>
                        {reviewText}
                    </textarea>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;
