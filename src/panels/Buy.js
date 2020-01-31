import React from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vk-connect';
import { platform, IOS, ANDROID } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

import './Buy.css';

const osName = platform();


const vkPay = () => {
	connect.send("VKWebAppOpenPayForm", {"app_id": 7297118, "action": "transfer-to-group", "params": {"group_id" : 191467857, "description" : ""}});
}

const Buy = props => (
	<Panel id={props.id}>

		{(osName === IOS) && 
			<React.Fragment>
				<PanelHeader
				left={<HeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</HeaderButton>}
				>
				Приступим
				</PanelHeader>
					<Group className="iosGroup">
						<Div> 
							<p className="iosInfo">Благотворительность - одно из сопутствующих улучшению кармы.</p>
							<p className="iosInfo">1 рубль - плюс 1 к карме</p>
							<Button className="iosBtnNext" size="xl" level="2" onClick={vkPay}>
								Пожертвовать
							</Button>
						</Div>
					</Group>
			</React.Fragment>
		}
	
		{(osName === ANDROID) && 
			<React.Fragment>
				<PanelHeader
				left={<HeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</HeaderButton>}
				>
				Приступим
				</PanelHeader>
					<Group className="androidGroup">
						<Div> 
							<p className="androidInfo">Благотворительность - одно из сопутствующих улучшению кармы.</p>
							<p className="iosInfo">1 рубль - плюс 1 к карме</p>
							<Button className="androidBtnNext" size="xl" level="2"  onClick={vkPay}>
								Пожертвовать
							</Button>
						</Div>
					</Group>
			</React.Fragment>
		}

	</Panel>
);

Buy.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Buy;
