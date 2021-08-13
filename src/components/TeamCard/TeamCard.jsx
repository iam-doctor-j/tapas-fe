const TeamCard = ({ name, designation }) => {
  return (
    <div className="bg-black text-gray-100 p-4 rounded-md text-center bg-opacity-40 backdrop-filter backdrop-blur-sm border border-gray-100">
      {name}
      <span className="text-xs block">({designation})</span>
    </div>
  );
};

export default TeamCard;
