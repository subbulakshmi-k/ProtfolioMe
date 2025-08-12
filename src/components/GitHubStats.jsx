import React, { useState, useEffect } from 'react';
import './GitHubStats.css';

const GitHubStats = ({ username = "yourusername" }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setStats({
          followers: data.followers,
          following: data.following,
          repos: data.public_repos,
          stars: data.public_gists
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  if (loading) return <div className="github-stats loading">Loading...</div>;

  return (
    <div className="github-stats">
      <h3>GitHub Activity</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <i className="fas fa-users"></i>
          <span className="stat-number">{stats?.followers || 0}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-card">
          <i className="fas fa-code-branch"></i>
          <span className="stat-number">{stats?.repos || 0}</span>
          <span className="stat-label">Repositories</span>
        </div>
        <div className="stat-card">
          <i className="fas fa-star"></i>
          <span className="stat-number">{stats?.stars || 0}</span>
          <span className="stat-label">Stars</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
