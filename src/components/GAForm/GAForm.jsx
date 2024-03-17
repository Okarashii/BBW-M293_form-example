import { useState } from "react";

export default function GAForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [payYearly, setPayYearly] = useState(true);
    const [firstClass, setFirstClass] = useState(false);
    const [age, setAge] = useState(undefined);
    const [hasDisablility, setHasDisability] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [hasFlatmateGA, setHasFlatmateGA] = useState(false);
    const [familia, setFamilia] = useState(false);

    return (
        <div>

        </div>
    );
}