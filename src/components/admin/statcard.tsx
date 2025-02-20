import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
interface StatCardProps {
    Title: string;
    Description: string;
    Value: string;
    AdditionalInfo?:string;
}
const StatCard = ({ Title, Description, Value, AdditionalInfo }: StatCardProps) => {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{Title}</CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{Description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{Value}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-400 dark:text-gray-500">{AdditionalInfo}</p>
      </CardFooter>
    </Card>
  );
}

export default StatCard;
