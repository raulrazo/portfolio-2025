function ExperienceItem({ logo, position, company, duration, location}) {
    return (
        <div className="mb-8">
            <div className="flex gap-4">
                {/* Company logo */}
                <img
                    src={logo}
                    alt={`${company} Logo`}
                    className="w-24 h-24 object-contain"
                />

                {/* Job details */}
                <div className="flex-1">
                    <h3 className="text-black text-md font-bold pb-1">
                        {position}
                    </h3>
                    <p className="text-gray-500 text-sm">
                        {company}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {duration}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {location}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem;