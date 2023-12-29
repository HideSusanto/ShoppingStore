const ImageOverview = ({key,imageSrc}) => {
    return (
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
    );
}

export default ImageOverview;