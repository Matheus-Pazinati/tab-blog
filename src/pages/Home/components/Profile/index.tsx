import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ProfileContainer, ProfileIcon } from './styles'
import { useEffect, useState } from 'react'
import { githubApi } from '../../../../lib/api'

interface ProfileTypes {
  name: string
  bio: string
  login: string
  avatar_url: string
  html_url: string
  followers: string
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileTypes>({
    name: '',
    bio: '',
    login: '',
    avatar_url: '',
    html_url: '',
    followers: '',
  })

  useEffect(() => {
    async function getGithubProfile() {
      const response = await githubApi.get('/Matheus-Pazinati')
      const data = (await response.data) as ProfileTypes

      setProfile(data)
    }

    getGithubProfile()
  }, [])
  return (
    <ProfileContainer>
      <div className="ProfileContent">
        <img
          src={profile.avatar_url}
          alt={`Foto do perfil do Github do usuário ${profile.name}`}
        />
        <div className="ProfileData">
          <div className="ProfileName">
            <h1>{profile.name}</h1>
            <a href={profile.html_url} target={'_blank'} rel="noreferrer">
              <span>
                Github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </a>
          </div>
          <p>{profile.bio}</p>
          <ul className="ProfileStatus">
            <li title="Usuário Github">
              <ProfileIcon icon={faGithub} />
              {profile.login}
            </li>
            <li title="Escola">
              <ProfileIcon icon={faBuilding} />
              Rocketseat
            </li>
            <li title="Seguidores">
              <ProfileIcon icon={faUserGroup} />
              {profile.followers} seguidores
            </li>
          </ul>
        </div>
      </div>
    </ProfileContainer>
  )
}
