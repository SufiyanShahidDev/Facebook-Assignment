let postContainer = document.querySelector("#post-container")
console.log(postContainer)



const stories = [
    {
        fullName: "Emma Johnson",
        profilePic: "https://i.pravatar.cc/150?img=1",
        storyFile: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&h=700", // Sports Car
    },
    {
        fullName: "Liam Carter",
        profilePic: "https://i.pravatar.cc/150?img=2",
        storyFile: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=400&h=700", // Sports Bike
    },
    {
        fullName: "Sophia Martinez",
        profilePic: "https://i.pravatar.cc/150?img=3",
        storyFile: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&h=700", // Nature
    },
    {
        fullName: "Noah Williams",
        profilePic: "https://i.pravatar.cc/150?img=4",
        storyFile: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400&h=700", // Sports Car
    },
    {
        fullName: "Ava Brown",
        profilePic: "https://i.pravatar.cc/150?img=5",
        storyFile: "https://images.unsplash.com/photo-1449495169669-7b118f960251?auto=format&fit=crop&w=400&h=700", // Sports Bike
    },
    {
        fullName: "Olivia Anderson",
        profilePic: "https://i.pravatar.cc/150?img=6",
        storyFile: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&h=700", // Nature
    },
    {
        fullName: "Ethan Miller",
        profilePic: "https://i.pravatar.cc/150?img=7",
        storyFile: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=400&h=700", // Sports Car
    },
    {
        fullName: "Isabella Garcia",
        profilePic: "https://i.pravatar.cc/150?img=8",
        storyFile: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&h=700", // Sports Bike
    },
    {
        fullName: "James Wilson",
        profilePic: "https://i.pravatar.cc/150?img=9",
        storyFile: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&h=700", // Nature
    },
    {
        fullName: "Mia Thompson",
        profilePic: "https://i.pravatar.cc/150?img=10",
        storyFile: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&h=700", // Sports Car
    },
    {
        fullName: "Benjamin Moore",
        profilePic: "https://i.pravatar.cc/150?img=11",
        storyFile: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=400&h=700", // Sports Bike
    },
    {
        fullName: "Charlotte Taylor",
        profilePic: "https://i.pravatar.cc/150?img=12",
        storyFile: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=700", // Nature
    },
    {
        fullName: "Lucas Hernandez",
        profilePic: "https://i.pravatar.cc/150?img=13",
        storyFile: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&h=700", // Sports Car
    },
    {
        fullName: "Amelia Clark",
        profilePic: "https://i.pravatar.cc/150?img=14",
        storyFile: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=400&h=700", // Sports Bike
    },
    {
        fullName: "Henry Lewis",
        profilePic: "https://i.pravatar.cc/150?img=15",
        storyFile: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&h=700", // Nature
    },
];



const storyContainer = document.getElementById("story-container");

const createStoryHTML = () => {
    for (let i = 0; i < stories.length; i++) {
        const story = stories[i];
        const storyHTML = ` <div class="story"
                            style="background-image: url(${story.storyFile});">

                            <div class="profile-pic">
                                <img src="${story.profilePic}"
                                    alt="">
                            </div>

                            <div class="story-content">
                                <p>${story.fullName}</p>
                            </div>
                        </div>`;

        storyContainer.innerHTML += storyHTML;
    }
};

const createStoryHTMLThroughMap = () => {
    const returnedArr = stories.map((story, index) => {
        return ` <div class="story"
                            style="background-image: url(${story.storyFile});">
                            <div class="profile-pic">
                                <img src="${story.profilePic}"
                                    alt="">
                            </div>
                            <div class="story-content">
                                <p>${index + 1}: ${story.fullName}</p>
                            </div>
                        </div>`;
    });

    storyContainer.innerHTML = returnedArr.join("");
};

// createStoryHTML();

createStoryHTMLThroughMap();


let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero velit, illo culpa asperiores sapiente deleniti nisi cum, alias reiciendis quidem. Error quo impedit nisi perferendis earum omnis, explicabo itaque! Dolores, ipsum. Ratione quas impedit asperiores nesciunt iusto suscipit, magnam accusamus totam ipsam voluptatum aspernatur, quae officia modi tenetur, officiis ducimus magni eum quibusdam repellat nihil. Dignissimos quibusdam autem, corporis maxime repudiandae cumque quod temporibus veniam nihil, blanditiis neque fugiat?";


let expandElem = document.getElementById("expand")
let para = document.getElementById("para")

function expand() {
    console.log(expandElem.innerText)

    if (expandElem.innerText == "see more") {
        para.innerHTML = text
        expandElem.innerText = "see less"

    } else {
        para.innerText = text.slice(0, 200)
        expandElem.innerText = "see more"
    }

}