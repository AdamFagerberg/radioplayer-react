import Skeleton from "react-loading-skeleton";

function SkeletonCard() {
  return (
    <div className="skeletonCard">
      <div>
        <Skeleton
          width={800}
          height={400}
          count={5}
          style={{ borderRadius: 20 }}
        />
      </div>
    </div>
  );
}

export default SkeletonCard;
