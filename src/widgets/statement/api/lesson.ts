export const fetchSudentLessons = async (quater: number) => {
  const response = await fetch(
    "http://prodd.dvotch.ru:3001/api/student/lessons" + quater,
    {
      headers: {
        Authentication:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NGQ2OTBjLTNkNjAtNDg5NC1iYTU5LTA3NDEzNzQzNTEzMCIsImVtYWlsIjoiZGV2Iiwicm9sZXMiOlsiU1RVREVOVCJdLCJvcmdhbml6YXRpb25JZCI6bnVsbCwiaWF0IjoxNzEzNTM1MzUwLCJleHAiOjE3MTM1Mzg5NTB9.MyUS4Z1R6rm0SPmtudHjEWFrdJApsHcpQY8fiBZO17A",
      },
    }
  );
};
