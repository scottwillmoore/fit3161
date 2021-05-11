export type ActionProps = {
    title: string;
    description: string;
} & CardProps<T>;

export function Action({ title, description, path }: ActionProps) {
    const history = useHistory();
    const { url } = useRouteMatch();

    const testId = generateId();
    const handleClick = () => {
        history.push(`${url}/${path}/${testId}`);
    };

    return (
        <Card as="button" className={classes.action} onClick={handleClick}>
            <CardSection>
                <div className={classes.header}>
                    <div className={classes.body}>
                        <h1 className={classes.title}>{title}</h1>
                        <p className={classes.description}>{description}</p>
                    </div>
                    <ArrowUpRight className={classes.arrow} height="24" />
                </div>
            </CardSection>

            <CardSection variant="secondary">
                <Property
                    icon={Clock}
                    name="Last Administered"
                    content={`11th December 2020`}
                />
            </CardSection>
        </Card>
    );
}
