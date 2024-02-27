const loadVideos = async (id) =>{
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
        const data = await res.json();
        const video = (data.data);
        displayVideos(video);
    }
    catch (error){
        console.error('Error Fetching data :', error);
    }
};


const displayVideos = (videos) =>{
    const videoContainer = document.getElementById('video-container');
    //clear previous content
    videoContainer.innerHTML = '';

    videos.forEach(video => {
        const authors = video.authors.map(author =>author.profile_name).join(', ');

        const views = video.others.views || 'N/A';
        const postedDate=video.others.posted_date || 'N/A';
        const videoCard = document.createElement('div');
        videoCard.classList.add('card','w-80', 'bg-base-100','shadow-xl', 'mt-8','pt-12');
        videoCard.innerHTML=`
     
            <figure><img src="${video.thumbnail}" alt="video" /></figure>
            <div class="card-body">
                    <h2 class="card-title">${video.title}</h2>
                    <p>Authors: ${authors}</p>
                    <p>views: ${views}</p>
                    <p>posted Date: ${postedDate}</p>
            </div>
        
        `;
        videoContainer.appendChild(videoCard);
    });
}

//call loadVideos function to Fetch and display video data

loadVideos(1000);