import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogCustomAnimation() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <form>
        <Button
          color="brown"
          className="mt-6"
          fullWidth
          onClick={handleOpen}
          variant="gradient"
        >
          Submit
        </Button>
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Are you sure?</DialogHeader>
          <DialogBody divider>
            Please confirm your details once before submitting the form.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              variant="gradient"
              color="green"
              onClick={handleOpen}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </form>
    </>
  );
}
