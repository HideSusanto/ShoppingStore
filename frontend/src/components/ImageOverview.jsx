const ImageOverview = ({imageSrc}) => {
    return (
        <div className="aspect-h-5 aspect-w-5 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
    );
}

export default ImageOverview;