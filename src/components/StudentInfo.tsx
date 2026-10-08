import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <div className="flex-1 p-4">
      <Drawer swipeDirection="left">
        <DrawerTrigger
          render={<Button variant="secondary">Sila Sanapong</Button>}
        />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
            <DrawerDescription>Student information</DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 p-4">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <img src="../../public/duck.jpg" alt="duck" />
              <CardHeader>
                <CardAction></CardAction>
                <CardTitle>Sila Sanapong</CardTitle>
                <CardDescription>
                  <p>นักศึกษาคณะวิศวะกรรมศาสตร์ สาขาคอมพิวเตอร์</p>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex mb-2">
                  <Badge variant="outline">Hobbie</Badge>
                  <p>ดูหนัง, ฟังเพลง, เล่นเกม</p>
                </div>
                <div className="flex mb-2">
                  <Badge variant="outline">Email</Badge>
                  <p>sila_sanapong@cmu.ac.th</p>
                </div>
                <div className="flex">
                  <Badge variant="outline">Social</Badge>
                  <a href="https://www.instagram.com/sila.senapong/">
                    sila.senapong
                  </a>
                </div>
              </CardContent>
              <CardFooter>รหัสนักศึกษา : 670610429</CardFooter>
            </Card>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button>Close</Button>} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
