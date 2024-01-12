const Comment = ({userimage, username, usercomment}) => {
    return (
        <div className="grid grid-cols-5 gap-5 mt-5 p-5 shadow-lg rounded-lg ">
            <div className='col-span-1'>
                <img className="rounded-lg mt-4" src={userimage} alt="this user's image" />
            </div>
              <div className='col-span-4'>
                <div className='flex flex-col'>
                    <div className="text-xl font-semibold">{username}</div>
                    <h5 className="text-gray-500 text-sm">Tuesday, 01 - 02 - 2024</h5>
                    <p>{usercomment}</p>
                </div>
              </div>
          </div>
    );
}

export default Comment;