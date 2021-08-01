import WorkCard from './WorkCard';

const WorkCardMap = ({ infoArray }) => infoArray.map((info, idx) => (
    <WorkCard
        name={info.Title}
        images={info.Gallery}
        date={info.Date}
        time={info.time}
        trend={info.Trend}
        venue={info.Venue}
        upcoming={info.Upcoming}
        desc={info.Description}
        key={idx}
    />
));

export default WorkCardMap;