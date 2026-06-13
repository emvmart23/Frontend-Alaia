import type { ComponentProps } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";

type CardProps = ComponentProps<"div">;
type CardTitleProps = ComponentProps<"h3">;
type CardDescriptionProps = ComponentProps<"p">;

function Card({ className, ...props }: CardProps) {
  return <div className={clsx(styles.card, className)} {...props} />;
}

function CardHeader({ className, ...props }: CardProps) {
  return <div className={clsx(styles.cardHeader, className)} {...props} />;
}

function CardTitle({ className, ...props }: CardTitleProps) {
  return <h3 className={clsx(styles.cardTitle, className)} {...props} />;
}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={clsx(styles.cardDescription, className)} {...props} />;
}

function CardAction({ className, ...props }: CardProps) {
  return <div className={clsx(styles.cardAction, className)} {...props} />;
}

function CardContent({ className, ...props }: CardProps) {
  return <div className={clsx(styles.cardContent, className)} {...props} />;
}

function CardFooter({ className, ...props }: CardProps) {
  return <div className={clsx(styles.cardFooter, className)} {...props} />;
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
};
