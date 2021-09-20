const TeamCard = ({ name, designation }) => {
  return (
    <div className="bg-monogray shadow-xlc text-gray-100 p-4 rounded-md text-center ">
      {name}
      <span className="text-xs block">({designation})</span>
    </div>
  );
};

export default TeamCard;
