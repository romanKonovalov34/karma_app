import React from 'react';
import connect from '@vkontakte/vk-connect';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { platform, IOS, ANDROID } from '@vkontakte/vkui';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './Home.css';

const osName = platform();

const Home = ({ id, go }) => (
	<Panel id={id}>

	{(osName === IOS) && 
		<React.Fragment>
			<PanelHeader className="iosHeader">О сервисе</PanelHeader>
				<Group className="iosGroup" title="+100 к карме">
					<Div> 
<<<<<<< HEAD
						<p className="iosInfo">
						Что посеешь, то и пожнешь. Такова суть первого закона кармы.
						</p>
=======
						<p className="iosInfo">Что посеешь, то и пожнешь. Такова суть первого закона кармы. </p>
>>>>>>> 9d7671c794eea72d96f8b767439c006692f7a2f8
						<Button className="iosBtnNext" size="xl" level="2" onClick={go} data-to="buy">
							Приступим
						</Button>
					</Div>
				</Group>
		</React.Fragment>
	}

	{(osName === ANDROID) && 
		<React.Fragment>
			<PanelHeader className="">О сервисе</PanelHeader>
			<Group className="androidGrout" title="+100 к карме">
				<Div> 
					<p className="androidInfo">
					Что посеешь, то и пожнешь. Такова суть первого закона кармы.
					</p>
					<Button className="androidBtnNext" size="xl" level="2" onClick={go} data-to="buy">
						Приступим
					</Button>
				</Div>
			</Group>
		</React.Fragment>
	}

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
