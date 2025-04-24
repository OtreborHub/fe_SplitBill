import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppContext } from "../../Context";
import { useEffect, useState } from "react";
import Group from "../../utilities/Group";

export default function Groups() {  
	const [groups, setGroups] = useState<Group[]>([new Group("Gruppo 1", "Descrizione Gruppo 1"), new Group("Gruppo 2", "Descrizione Gruppo 2")]);

	const appContext = useAppContext();
	
	useEffect(() => {
		//chiamata a DB per recuperare i gruppi

		//appContext.account.getGroups().then((groups) => {	
		//	setGroups(groups);
		//	console.log(groups);
		//});

		// oppure

		// getGroups(appContext.account.getUsername()).then((groups) => {
		//	setGroups(groups);
		//	console.log(groups);
		// });
	}, [appContext.account]);

  return (
		<Box sx={{ padding: 2, textAlignLast: 'end', color: 'white' }}>
			
			<Typography
				variant="h3"
				component="h1"
				sx={{
					color: '#6001d4',
					fontWeight: 'bold',
					textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
				}}
				gutterBottom
			>
				Elenco Gruppi
			</Typography>

			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, textAlignLast: 'end' }}>
				{groups.map((group, index) => (
					<Box
						key={index}
						sx={{
							border: 1,
							borderColor: 'grey.400',
							padding: 2,
							borderRadius: 1,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Box sx={{ textAlign: 'right', flex: 1 }}>
							<Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
								{group.getName()}
							</Typography>
							<Typography variant="body1">{group.getDescription()}</Typography>
						</Box>
						<Box
							component="img"
							src={group.getImage()}
							alt="Group"
							sx={{
								width: 50,
								height: 50,
								marginLeft: 2,
								borderRadius: '50%',
							}}
						/>
					</Box>
				))}
			</Box>

		</Box>
  );
}