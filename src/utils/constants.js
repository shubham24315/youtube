const key="AIzaSyB86VBsl-lDvuXKGh4BIO5HdbS-pq-pry8";

export const YOUTUBE_VIDEOS_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${key}`;


export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

//Live Chat >> Infinite scroll >>> Pagination

export const OFFSET_LIVE_CHAT=20;